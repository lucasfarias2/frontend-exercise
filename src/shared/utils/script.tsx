import withSideEffect from 'react-side-effect';

const Script = (props: { src: string }): null => null;

const reducePropsToState = (propsList: any) => {
  const scripts: string[] = [];
  propsList.forEach((props: any) => {
    if (props.children) {
      scripts.push(`<script>${props.children}</script>`);
    } else {
      scripts.push(`<script src="/static/${props.src}.js"></script>`);
    }
  });
  return scripts.join('');
};

const handleStateChangeOnClient = (propsList: any) => {
  return;
};

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(
  // @ts-ignore
  Script
);
