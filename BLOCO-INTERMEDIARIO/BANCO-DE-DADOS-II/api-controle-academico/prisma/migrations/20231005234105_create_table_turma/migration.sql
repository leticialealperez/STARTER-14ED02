-- CreateTable
CREATE TABLE "turma" (
    "id" UUID NOT NULL,
    "formacao" VARCHAR(100) NOT NULL,
    "edicao" SMALLINT NOT NULL,
    "turma" VARCHAR(20),
    "max_alunos" SMALLINT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "turma_pkey" PRIMARY KEY ("id")
);
