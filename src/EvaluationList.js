import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

import EvalList from "./EvalList/EvalList";

export default () => (
  <Card>
    <Title title="Evalueation View" />
    <CardContent>Evaluation List View</CardContent>
    <EvalList />
  </Card>
);
