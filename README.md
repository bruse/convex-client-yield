# Unexpected yields in convex clients subscription yields

When using the rust and pyton clients, the subscription streams yield results, potentially unexpectedly, whenever we interact with the client within the "subscription handler" (loop body). See `rust/` and `python/` folders for demonstration. Note that we subscripte to the `tasks` table and then query a completely different table `todos`. No tasks have been modified, no mutations have been executed, so that the stream keep yielding the same tasks over and over is not what I expected.

