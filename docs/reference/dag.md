**DAGs and Linearization**
Primary references for DAG definitions, partial orders, and topological sorting (linearization).

- Lehman, Leighton, Meyer. "Mathematics for Computer Science" (MIT 6.042/6.042J notes). Defines DAGs, strict partial orders, total orders, and topological sorts. https://people.csail.mit.edu/meyer/6042-notes-spring08.pdf
- Wikipedia, "Directed acyclic graph." High-level overview and terminology cross-links; use as a quick refresher, not a spec. https://en.wikipedia.org/wiki/Directed_acyclic_graph

**Notes**
If you use the term "linear DAG" in docs, define it explicitly. Common interpretations are:

- A DAG whose reachability relation is a total order (a chain).
- A linearization of a DAG via topological sorting (a total order consistent with the partial order).
