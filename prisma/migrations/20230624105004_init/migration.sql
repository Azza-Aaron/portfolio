-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
