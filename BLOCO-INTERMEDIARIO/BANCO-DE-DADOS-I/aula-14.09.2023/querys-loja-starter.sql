-- LISTAR TUDO DAS TABELAS
/*
 * 
	select <colunas> 
	from <tabela>
	where <condicao de filtragem>
	order by <coluna ordenacao> ASC | DESC
	group by <coluna agrupamento>
	limit <numero max de registros a serem mostrados>

*/
select p.* from produtos p;
select u.* from usuarios u;
select c.* from compras c; 


-- LISTAR TUDO DA TABELA ORDENANDO PELO NOME
-- [A-Z] ORDEM CRESCENTE
select p.* 
from produtos p 
order by p.nome
asc;


-- [Z-A] ORDEM DECRESCENTE
select p.*
from produtos p 
order by p.nome desc;


-- LISTAR TUDO DA TABELA PRODUTOS ORDENANDO PELO PREÇO
-- ORDEM CRESCENTE
select p.* 
from produtos p 
order by p.preco asc;


-- ORDEM DECRESCENTE
select p.* 
from produtos p 
order by p.preco desc;


-- BUSCAR TOTAL DE REGISTROS NA TABELA
-- APLICAR UM "APELIDO" (ALIAS) PARA A COLUNA DO RESULTADO
select count(p.*) as "TOTAL DE REGISTROS" from produtos p;
select count(c.*) as "TOTAL DE COMPRAS" from compras c ;



/* 
 * OPERADORES RELACIONAIS 
 * =
 * !=
 * > e <
 * >= e <=
 * 
 */
-- LISTAR PRODUTOS DE PREÇO ACIMA DE 30
select p.*
from produtos p 
where p.preco >= 30;


-- LISTAR PRODUTOS DE PREÇO ATÉ 60
select p.*
from produtos p 
where p.preco <= 60;


/* 
 * OPERADORES LÓGICOS 
 * 
 * AND
 * OR
 * NOT
 * 
 */

-- LISTAR PRODUTOS DE PREÇO ENTRE 50 E 80
select p.*
from produtos p 
where (p.preco >= 50) and (p.preco <= 80);


-- LISTAR PRODUTOS FORA DA FAIXA DE PREÇO DA LISTAGEM ACIMA
select p.*
from produtos p 
where not((p.preco >= 50) and (p.preco <= 80));


-- LISTAR PRODUTOS QUE INICIEM COM A LETRA "b" 
-- OU QUE TERMINEM COM A LETRA 'z'
select p.* 
from produtos p 
where p.nome ilike 'b%' or p.nome ilike '%z';


-- BUSCAR USUARIO QUE TENHAM 'joao' em qualquer parte do email
select u.* from usuarios u
where u.email ilike '%joao%';


-- LISTAR USUARIO CUJO E-MAIL SEJA IGUAL À "lucas@example.com" 
-- E SENHA SEJA IGUAL À "senha765"
-- MOSTRAR SOMENTE O ID
select u.id 
from usuarios u
where u.email = 'lucas@example.com' and u.senha = 'senha765';


-- LISTAR AS COMPRAS DO USUÁRIO ENCONTRADO NA QUERY ACIMA
-- SUBQUERY
select c.*
from compras c 
where c.usuario_id = (
	select u.id 
	from usuarios u
	where u.email = 'lucas@example.com' and u.senha = 'senha765'
);

/*
 * FUNÇÕES DE AGREGAÇÃO
 * 
 * COUNT - contabilizar a quantidade de ocorrencias
 * SUM - encontra a soma de valores de uma determinada coluna
 * AVG - encontra a média de valores de uma determinada coluna
 * MAX - encontrar o maior valor de uma determinada coluna
 * MIN - encontrar o menor valor de uma deternada coluna
 * 
 * */

-- SOMA TOTAL DOS PREÇOS DE PRODUTOS CADASTRADOS
select sum(p.preco) as "soma total"
from produtos p;

-- MÉDIA DE PREÇOS DE PRODUTOS CADASTRADOS NA TABELA
select avg(p.preco) as "media de preços"
from produtos p;

-- ENCONTRAR O PRODUTO MAIS CARO CADASTRADO
select max(p.preco) as "PRODUTO MAIS CARO"
from produtos p;

-- ENCONTRAR O PRODUTO MAIS BARATO CADASTRADO
select min(p.preco) as "produto mais barato"
from produtos p ;



-- QUANTIDADE TOTAL DE ITEMS QUE O USUARIO DA QUERY ACIMA COMPROU
select sum(c.quantidade) as "quantidade de items comprados"
from compras c 
where c.usuario_id = (
	select u.id 
	from usuarios u
	where u.email = 'lucas@example.com' and u.senha = 'senha765'
);


-- MESMA CONSULTA DA QUERY ACIMA, 
-- PORÉM MOSTRANDO O NOME DO USUARIO, O NOME DO PRODUTO E O PREÇO DO PRODUTO
select u.nome, p.nome, c.quantidade, p.preco 
from compras c
join usuarios u 
on c.usuario_id = u.id
join produtos p 
on c.produto_id = p.id
where u.id = 8;


-- MESMA CONSULTA DA QUERY ACIMA, 
-- ADICIONAR TOTAL DA COMPRA COM BASE NO VALOR UNITARIO E A QUANTIDADE COMPRADA
select u.nome, p.nome, c.quantidade, p.preco, (p.preco * c.quantidade) as "total compra" 
from compras c
join usuarios u 
on c.usuario_id = u.id
join produtos p 
on c.produto_id = p.id
where u.id = 8;

-- TOTAL DE COMPRAS DO USUARIO DA QUERY ACIMA
select sum((p.preco * c.quantidade)) as "total em compras" 
from compras c
join usuarios u 
on c.usuario_id = u.id
join produtos p 
on c.produto_id = p.id
where u.id = 8;


-- MEDIA DE COMPRAS DO USUARIO DA QUERY ACIMA
select avg(p.preco * c.quantidade) as "média de compras" 
from compras c 
join produtos p 
on c.produto_id  = p.id 
join usuarios u  
on c.usuario_id = u.id 
where u.id = 8;


-- BUSCAR A QUANTIDADE TOTAL DE ITENS COMPRADOS AGRUPANDO POR PRODUTO
-- MOSTRAR O NOME DO PRODUTO
select p.nome, sum(c.quantidade) 
from compras c
join usuarios u 
on c.usuario_id = u.id
join produtos p 
on c.produto_id = p.id
where u.id = 8
group by p.nome;


-- BUSCAR OS 5 PRODUTOS MAIS VENDIDOS
select p.*, sum(c.quantidade) as "total"
from compras c 
join produtos p 
on c.produto_id = p.id
group by p.id
order by "total" desc
limit 5;


-- BUSCAR OS 3 USUARIOS QUE MAIS COMPRARAM NA LOJA
select u.*, sum(c.quantidade * p.preco) as "total" 
from compras c
join produtos p
on c.produto_id = p.id
join usuarios u
on u.id = c.usuario_id
group by u.id
order by "total" desc
limit 3;


-- QUERY BUSCA TODOS USUARIOS SEM COMPRAS
-- olhando para tabela compras (tabela do from)
select u.*, c.usuario_id 
from compras c right join usuarios u 
on c.usuario_id = u.id 
where c.usuario_id is null;

-- olhando para tabela de usuarios (tabela do from)
select u.*, c.id 
from usuarios u left join compras c
on u.id = c.usuario_id 
where c.id is null;


-- QUERY BUSCAR TODOS OS USUARIOS COM O GASTO TOTAL EM COMPRAS
select
	u.*,
	sum(p.preco * c.quantidade) as total_em_compras
from
	usuarios u
left join compras c on
	c.usuario_id = u.id
left join produtos p on
	p.id = c.produto_id
group by
	u.id
	order by u.nome 





















































-- QUERY BUSCA USUARIOS ORDENADO POR NOME DESC
select u.* from usuarios u
order by u.nome desc

-- QUERY BUSCA COMPRAS POR USUARIO
select c.* from compras c
where c.usuario_id = 4

-- QUERY BUSCA COMPRAS POR USUARIO COM PRECO
select
	c.id,
	p.nome,
	c.quantidade,
	p.preco,
	c.data_compra
from
	compras c
join produtos p on
	c.produto_id = p.id
where
	c.usuario_id = 4
	
-- QUERY BUSCAR PRODUTOS MAIS VENDIDOS
select
	p.*,
	round( p.preco - (p.preco * 0.2), 2) as preco_desconto, 
	count(c.quantidade) as total
from
	produtos p
join compras c on
	c.produto_id = p.id
group by
	p.id
order by
	total desc
limit 5;

-- QUERY USUARIOS QUE MAIS COMPRARAM
select
	u.id, u.nome, 
	sum(p.preco * c.quantidade)as total_preco
from
	usuarios u
join compras c on
	c.usuario_id = u.id
join produtos p on
	p.id = c.produto_id
group by
	u.id
order by total_preco desc 
limit 5

-- QUERY BUSCA TODOS USUARIOS SEM COMPRAS
select u.* from usuarios u 
left join compras c ON c.usuario_id = u.id 
where c.id is null
order by u.nome

-- QUERY BUSCA TODOS USUARIOS COM TOTAL DE COMPRAS(QUATIDADE DE COMPRAS EXECUTADAS) 
select
	u.*,
	count(c.id) as total_de_compras
from
	usuarios u
left join compras c on
	c.usuario_id = u.id
	group by u.id
	order by u.nome 
	
-- QUERY BUSCA TODOS OS USUARIOS COM O GASTO TOTAL EM COMPRAS
select
	u.*,
	sum(p.preco * c.quantidade) as total_em_compras
from
	usuarios u
left join compras c on
	c.usuario_id = u.id
left join produtos p on
	p.id = c.produto_id
group by
	u.id
	order by u.nome 
	
-- QUERY BUSCA OS USUARIOS COM COMPRA DE ITENS REPETIDOS
select
	u.id,
	u.nome,
	p.id,
	p.nome,
	sum(c.quantidade) as total_itens
from
	usuarios u
inner join compras c on
	c.usuario_id = u.id
inner join produtos p on
	c.produto_id = p.id
group by
	u.id,
	p.id
having sum(c.quantidade) > 1
order by
	u.nome








	
	
	
	
	