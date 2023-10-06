-- CreateTable
CREATE TABLE "matricula" (
    "numero_controle" BIGINT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "id_aluno" UUID NOT NULL,
    "id_turma" UUID NOT NULL,

    CONSTRAINT "matricula_pkey" PRIMARY KEY ("id_aluno","id_turma")
);

-- CreateIndex
CREATE UNIQUE INDEX "matricula_numero_controle_key" ON "matricula"("numero_controle");

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_turma_fkey" FOREIGN KEY ("id_turma") REFERENCES "turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
