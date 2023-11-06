-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'general',
    "description" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL,
    "priority" TEXT NOT NULL DEFAULT 'low',
    "notificationId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "tasks_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "notifications" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_tasks" ("completed", "createdAt", "date", "description", "id", "name", "notificationId", "updatedAt") SELECT "completed", "createdAt", "date", "description", "id", "name", "notificationId", "updatedAt" FROM "tasks";
DROP TABLE "tasks";
ALTER TABLE "new_tasks" RENAME TO "tasks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
