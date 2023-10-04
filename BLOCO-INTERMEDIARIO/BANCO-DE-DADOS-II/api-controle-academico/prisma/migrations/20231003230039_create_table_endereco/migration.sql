-- CreateTable
CREATE TABLE "endereco" (
    "id" UUID NOT NULL,
    "logradouro" VARCHAR(100) NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "cidade" VARCHAR(100) NOT NULL,
    "uf" CHAR(2) NOT NULL,
    "complemento" VARCHAR(100),
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "id_aluno" UUID NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "endereco_id_aluno_key" ON "endereco"("id_aluno");

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
