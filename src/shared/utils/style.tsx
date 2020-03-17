import withSideEffect from 'react-side-effect';

const Style = (props: { src: string }): null => null;

const reducePropsToState = (propsList: any) => {
  const styles: string[] = [];
  propsList.forEach((props: any) => {
    styles.push(`<link rel="stylesheet" type="text/css" href="/static/${props.src}.css">`);
  });
  return styles.join('');
};

const handleStateChangeOnClient = (propsList: any) => {
  return;
};

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(
  // @ts-ignore
  Style
);
