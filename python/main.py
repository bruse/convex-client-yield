from __future__ import annotations

import os

from convex import ConvexClient, ConvexError
from typing import Any, Dict, Iterable, List, Optional

def main():
    client = ConvexClient(os.getenv("CONVEX_URL"))
    stream = client.subscribe("tasks:get", {})

    for numNonComplete in stream:
        print(numNonComplete)
        # The query below will trigger a new yield in the stream above,
        # if it is commented out the loop will pause
        q = client.query("todos:get", {})

if __name__ == "__main__":
    main()

