import React from 'react';
import { getRepositoryList } from 'Redux/actions';
import { ProfileCard } from 'Component';
import './index.scss';
import { connect } from 'react-redux';

class SearchRepository extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], q: 'share' };
  }
  componentDidMount() {
    var data = {
      q: this.state.q,
      sort: 'stars',
      order: 'des',
      per_page: '100',
      page: '1',
    };
    this.props.getRepositoryList(data);
  }

  getRepo = (text) => {
    var data = {
      q: text.target.value,
      sort: 'stars',
      order: 'des',
      per_page: '100',
      page: '1',
    };
    this.setState({ q: text.target.value }, () =>
      this.props.getRepositoryList(data)
    );
  };
  render() {
    const { data = [], count = '0' } = this.props.result;
    return (
      <div className={'container'}>
        <input
          value={this.state.q}
          onChange={this.getRepo}
          className='searchBox'
          placeholder='Search by Repository Name'
        />
        <br></br>
        <p>Total-count:- {count}</p>
        <div className={'mainContainer'}>
          {data.map((el) => {
            return (
              <ProfileCard
                key={el.node_id}
                avatar_url={el.avatar_url}
                full_name={el.full_name}
                owner={el.owner}
                stargazers_count={el.stargazers_count}
                updated_at={el.updated_at}
                description={el.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps, { getRepositoryList })(
  SearchRepository
);
