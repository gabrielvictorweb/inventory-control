-- CreateTable
CREATE TABLE "StatusPurchase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Purchase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "price" TEXT NOT NULL,
    "statusPurchaseId" INTEGER,
    CONSTRAINT "Purchase_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchase_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchase_statusPurchaseId_fkey" FOREIGN KEY ("statusPurchaseId") REFERENCES "StatusPurchase" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Purchase" ("authorId", "id", "price", "productId", "quantity") SELECT "authorId", "id", "price", "productId", "quantity" FROM "Purchase";
DROP TABLE "Purchase";
ALTER TABLE "new_Purchase" RENAME TO "Purchase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
