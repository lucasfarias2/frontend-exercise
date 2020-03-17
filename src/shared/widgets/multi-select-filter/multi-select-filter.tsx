import React from 'react';
import classNames from 'classnames';
import Card from '../../controls/card/card';
import Input from '../../controls/input/input';
import Button from '../../controls/button/button';
import IconSearch from '../../icons/search';
import renderHtml from '../../utils/render-html';

const namespace = 'app__multi-select-filter';

const MultiSelectFilter = ({ data, selectedItems, toggleItem }: IMultiSelectFilter) => {
  return (
    <div className={namespace}>
      <h2 className={`${namespace}__title`}>Multi-Select Filter</h2>
      <Card>
        <p className={`${namespace}__subtitle`}>Product group</p>
        <Input icon={<IconSearch />} placeholder="Search..." />
        <div className={`${namespace}__items`}>
          {data.map((item: string) => {
            const isSelected = selectedItems.find(selectedItem => selectedItem === item);
            return (
              <div className={`${namespace}__items__item`} key={item} onClick={() => toggleItem(item)}>
                <div
                  className={classNames(`${namespace}__items__item__checkbox`, {
                    [`${namespace}__items__item__checkbox--selected`]: isSelected,
                  })}
                />
                <span className={`${namespace}__items__item__text`}>{renderHtml(item)}</span>
              </div>
            );
          })}
        </div>
        <Button>Apply</Button>
      </Card>
    </div>
  );
};

interface IMultiSelectFilter {
  data: string[];
  selectedItems: string[];
  toggleItem?: (item: string) => {};
}

export default MultiSelectFilter;
