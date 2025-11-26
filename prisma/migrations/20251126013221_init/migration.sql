/*
  Warnings:

  - You are about to alter the column `type` on the `Budget` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Budget` ADD COLUMN `dueDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `recurrence` ENUM('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY', 'ONE_TIME') NOT NULL DEFAULT 'ONE_TIME',
    MODIFY `type` ENUM('INCOME', 'EXPENSE') NOT NULL;
