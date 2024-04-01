#!/bin/sh

npx prisma migrate dev
npm run seed
npm run start:dev