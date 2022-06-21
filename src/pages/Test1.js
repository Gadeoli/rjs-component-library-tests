import React, {useState} from 'react';
import { 
  Button,
  Span,
  Select,
  Card,
  CardContent
} from '@gadeoli/rjs-component-library-themed';
import { fruitData } from '../data/fake';
import Links from '../components/Links';

function Test1() {
  const [selectValues, setSelectValues] = useState([...fruitData]);

  return (
    <div>
      <Links />

      <Card>
        <CardContent>
            <Button type="" onClick={() => console.log('hey')} disabled={false}>Test1</Button> 
          <Button type="" onClick={() => console.log('hey')}>Test1(2)</Button> 
          <Span type=''>Test1</Span>

          <Select 
            values={selectValues}
            handleValues={(values) => {
              setSelectValues(values);
              console.log(values);
            }}
            emptyText={'selecione algo...'}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default Test1;
