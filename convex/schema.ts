import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }).index("isCompleted", ["isCompleted"]),
  todos: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});

