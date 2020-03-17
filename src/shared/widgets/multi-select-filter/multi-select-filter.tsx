import React from 'react';
import Card from '../../controls/card/card';
import Input from '../../controls/input/input';
import Button from '../../controls/button/button';
import IconSearch from '../../icons/search';

const namespace = 'app__multi-select-filter';

const MultiSelectFilter = ({}: IComponent) => (
  <div className={namespace}>
    <h2 className={`${namespace}__title`}>Multi-Select Filter</h2>
    <Card>
      <p className={`${namespace}__subtitle`}>Product group</p>
      <Input icon={<IconSearch />} placeholder="Search..." />
      <Button>Apply</Button>
    </Card>
  </div>
);

export default MultiSelectFilter;
