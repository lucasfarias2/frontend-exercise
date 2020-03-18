import React from 'react';
import classNames from 'classnames';
import Card from '../../controls/card/card';
import Button from '../../controls/button/button';
import Input from '../../controls/input/input';
import IconSearch from '../../icons/search';
import IconTrashCan from '../../icons/trash';
import renderHtml from '../../utils/render-html';

const namespace = 'app__multi-select-filter';

const TEXT_APPLY = 'Apply';
const TEXT_SEARCH_PLACEHOLDER = 'Search...';
const TEXT_SUBTITLE = 'Product group:';
const TEXT_TITLE = 'Multi-Select Filter';

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

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if ((!filter && !inputValue) || inputValue === filter) return;
    setItemsFilter(inputValue);
  };

  const handleOnClearItems = (e: any) => {
    e.preventDefault();
    clearSelectedItems();
  };

  const handleOnSelectItem = (item: TItem) => (e: any) => {
    e.preventDefault();
    selectItem(item);
  };

  const handleOnRemoveItem = (item: TItem) => (e: any) => {
    e.preventDefault();
    removeItem(item);
  };

  return (
    <div className={namespace}>
      <h2 className={`${namespace}__title`}>{TEXT_TITLE}</h2>
      <Card>
        <p className={`${namespace}__subtitle`}>
          {TEXT_SUBTITLE} {filter}
        </p>
        <form onSubmit={handleOnSubmit}>
          <Input
            value={inputValue}
            onChange={handleOnChange}
            icon={<IconSearch />}
            placeholder={TEXT_SEARCH_PLACEHOLDER}
          />
          <div className={`${namespace}__items`}>
            {selectedItems.map((item: string) => {
              return (
                <div className={`${namespace}__items__item`} key={item} onClick={handleOnRemoveItem(item)}>
                  <div
                    className={classNames(
                      `${namespace}__items__item__checkbox`,
                      `${namespace}__items__item__checkbox--selected`
                    )}
                  />
                  <span
                    className={classNames(
                      `${namespace}__items__item__text`,
                      `${namespace}__items__item__text--selected`
                    )}
                  >
                    {renderHtml(item)}
                  </span>
                </div>
              );
            })}
            {data
              .filter(item => (!filter ? true : item.toLowerCase().includes(filter)))
              .filter(item => !selectedItems.includes(item))
              .map((item: string) => {
                return (
                  <div className={`${namespace}__items__item`} key={item} onClick={handleOnSelectItem(item)}>
                    <div className={classNames(`${namespace}__items__item__checkbox`)} />
                    <span className={`${namespace}__items__item__text`}>{renderHtml(item)}</span>
                  </div>
                );
              })}
          </div>
          <div className={`${namespace}__buttons`}>
            <Button type="submit" className={`${namespace}__buttons__apply`}>
              {TEXT_APPLY}
            </Button>
            <Button className={`${namespace}__buttons__clear`} onClick={handleOnClearItems}>
              <IconTrashCan className={`${namespace}__buttons__trash-icon`} />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

interface IMultiSelectFilter {
  data: TData;
  filter?: TFilter;
  selectedItems: TSelectedItems;
  clearSelectedItems?: () => void;
  getSelectedItems?: () => void;
  removeItem?: (item: TItem) => void;
  selectItem?: (item: TItem) => void;
  setItemsFilter?: (filter: TItem) => void;
}

export default MultiSelectFilter;
