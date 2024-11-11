import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1731153326997 implements MigrationInterface {
    name = 'Initial1731153326997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "news" ("id" SERIAL NOT NULL, "chapeu" character varying NOT NULL, "url" character varying NOT NULL, "titulo" character varying NOT NULL, "data_hora_publicacao" character varying NOT NULL, "imagem" character varying NOT NULL, "thumbnail" character varying NOT NULL, "conteudo" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "news"`);
    }

}
