import React from 'react';
import classNames from 'classnames';
import Card from '../../controls/card/card';
import Input from '../../controls/input/input';
import Button from '../../controls/button/button';
import IconSearch from '../../icons/search';
import IconTrashCan from '../../icons/trash';
import renderHtml from '../../utils/render-html';

const namespace = 'app__multi-select-filter';

const MultiSelectFilter = ({
  clearSelectedItems,
  data,
  filter,
  getSelectedItems,
  removeItem,
  selectedItems,
  selectItem,
  setItemsFilter,
}: IMultiSelectFilter) => {
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    getSelectedItems();
  }, []);

  const handleOnChange = (e: any) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div className={namespace}>
      <h2 className={`${namespace}__title`}>Multi-Select Filter</h2>
      <Card>
        <p className={`${namespace}__subtitle`}>Product group: {filter}</p>
        <Input value={inputValue} onChange={handleOnChange} icon={<IconSearch />} placeholder="Search..." />
        <div className={`${namespace}__items`}>
          {selectedItems.map((item: string) => {
            return (
              <div className={`${namespace}__items__item`} key={item} onClick={() => removeItem(item)}>
                <div
                  className={classNames(
                    `${namespace}__items__item__checkbox`,
                    `${namespace}__items__item__checkbox--selected`
                  )}
                />
                <span
                  className={classNames(`${namespace}__items__item__text`, `${namespace}__items__item__text--selected`)}
                >
                  {renderHtml(item)}
                </span>
              </div>
            );
          })}
          {data
            .filter(item => {
              if (!filter) return true;
              return item.toLowerCase().includes(filter);
            })
            .filter(item => !selectedItems.includes(item))
            .map((item: string) => {
              return (
                <div className={`${namespace}__items__item`} key={item} onClick={() => selectItem(item)}>
                  <div className={classNames(`${namespace}__items__item__checkbox`)} />
                  <span className={`${namespace}__items__item__text`}>{renderHtml(item)}</span>
                </div>
              );
            })}
        </div>
        <div className={`${namespace}__buttons`}>
          <Button className={`${namespace}__buttons__apply`} onClick={() => setItemsFilter(inputValue)}>
            Apply
          </Button>
          <Button className={`${namespace}__buttons__clear`} onClick={() => clearSelectedItems()}>
            <IconTrashCan className={`${namespace}__buttons__trash-icon`} />
          </Button>
        </div>
      </Card>
    </div>
  );
};

interface IMultiSelectFilter {
  data: string[];
  filter?: string;
  selectedItems: string[];
  selectItem?: (item: string) => {};
  removeItem?: (item: string) => {};
  setItemsFilter?: (filter: string) => {};
  getSelectedItems?: () => {};
  clearSelectedItems?: () => {};
}

export default MultiSelectFilter;
