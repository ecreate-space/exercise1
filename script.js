const spec = {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {
    values: [
      { a: 'A', b: 18 },
      { a: 'B', b: 25 },
      { a: 'C', b: 33 },
      { a: 'D', b: 51 },
      { a: 'E', b: 61 },
      { a: 'F', b: 13 },
      { a: 'G', b: 49 },
      { a: 'H', b: 37 },
      { a: 'I', b: 52 },
    ],
  },
  mark: 'circle',
  encoding: {
    x: { field: 'a', type: 'ordinal' },
    y: { field: 'b', type: 'quantitative' },
  },
};

// The first opption the id for the div -> #vis
// the second option is for the spec
vegaEmbed('#v1', spec);

// For the Second Spec
vegaEmbed('#v2', 'bigFilterSpec.json');

// For the third Spec
vegaEmbed('#v3', 'filterSpec.json');
