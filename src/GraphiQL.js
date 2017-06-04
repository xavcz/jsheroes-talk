import React from "react";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";

const FETCH_OPTIONS = {
  method: "post",
  headers: { "Content-Type": "application/json" }
};

function getDefautlFetcher(url) {
  return function(params) {
    const body = JSON.stringify(params);
    const options = Object.assign({ body }, FETCH_OPTIONS);
    return fetch(url, options).then(res => res.json());
  };
}

function reIndentQuery(query) {
  const lines = query.split("\n");
  const spaces = lines[lines.length - 1].length - 1;
  return lines.map((l, i) => (i === 0 ? l : l.slice(spaces)).join("\n"));
}

const GraphiQLSlide = ({ url, query, variables = "{}" }) => {
  const fetcher = getDefautlFetcher(url);
  return <GraphiQL query={query} variables={variables} fetcher={fetcher} />;
};

export default GraphiQLSlide;
