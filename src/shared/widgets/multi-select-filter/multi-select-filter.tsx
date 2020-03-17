import React from 'react';
import Card from '../../controls/card/card';
import Input from '../../controls/input/input';
import Button from '../../controls/button/button';
import IconSearch from '../../icons/search';
import renderHtml from '../../utils/render-html';

const namespace = 'app__multi-select-filter';

const MultiSelectFilter = ({ data }: IMultiSelectFilter) => (
  <div className={namespace}>
    <h2 className={`${namespace}__title`}>Multi-Select Filter</h2>
    <Card>
      <p className={`${namespace}__subtitle`}>Product group</p>
      <Input icon={<IconSearch />} placeholder="Search..." />
      <div className={`${namespace}__items`}>
        {data.map((item: string) => (
          <div className={`${namespace}__items__item`} key={item}>
            <div className={`${namespace}__items__item__checkbox`} />
            <span className={`${namespace}__items__item__text`}>{renderHtml(item)}</span>
          </div>
        ))}
      </div>
      <Button>Apply</Button>
    </Card>
  </div>
);

interface IMultiSelectFilter {
  data: string[];
}

export default MultiSelectFilter;
