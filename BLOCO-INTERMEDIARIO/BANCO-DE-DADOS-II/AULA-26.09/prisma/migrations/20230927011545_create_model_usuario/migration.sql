-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL,
    "nome_completo" VARCHAR(100) NOT NULL,
    "idade" INTEGER,
    "email" VARCHAR(100) NOT NULL,
    "senha" TEXT NOT NULL,
    "endereco" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "data_nascimento" DATE NOT NULL,
    "criado_em" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");
