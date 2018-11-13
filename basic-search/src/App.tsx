import * as actionsAll from "actions";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchButton from "SearchButton";

interface IProps {
  actions: {
    searchAsync: () => void;
  };
}

class App extends React.Component<IProps, {}> {
  public handler = () => {
    this.props.actions.searchAsync();
  };

  public render() {
    return <SearchButton onClick={this.handler} />;
  }
}

const mapStateToProps = (state: any) => ({
  search: state.search
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actionsAll, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
