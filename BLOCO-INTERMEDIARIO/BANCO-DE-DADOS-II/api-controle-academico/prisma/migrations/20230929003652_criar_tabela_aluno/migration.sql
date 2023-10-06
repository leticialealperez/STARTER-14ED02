-- CreateTable
CREATE TABLE "aluno" (
    "id" UUID NOT NULL,
    "nome_completo" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "idade" INTEGER,
    "password" TEXT NOT NULL,
    "auth_token" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "aluno_email_key" ON "aluno"("email");
