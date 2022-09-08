import dados from './data.json'
import { parse } from 'node-html-parser';


export default function data(props) {
  return (
    parse(dados)
  );
}