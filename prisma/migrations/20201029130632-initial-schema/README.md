# Migration `20201029130632-initial-schema`

This migration has been generated by Kenneth Mbuthia at 10/29/2020, 4:06:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201029130632-initial-schema
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,15 @@
+datasource db {
+  provider = "sqlite" 
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Link {
+  id  Int @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+  description String
+  url String
+}
```


