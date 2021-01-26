import React from 'react';
import Image from '../image';
import styles from './ProfileCard.module.scss';

export default class ProfileCard extends React.Component {
  render() {
    return (
      <div className={styles.profileCard}>
        <Image src={this.props.owner.avatar_url} className={styles.image} />
        <div className={styles.profileDetail}>
          <a href={this.props.owner.html_url} className={styles.repo_name}>
            Repo Name: {this.props.full_name}
          </a>
          <p className={styles.repo_desc}>
            Owner Name: {this.props.owner.login}
          </p>
          <span className={styles.repo_desc}>
            Description: <br></br>
            {this.props.description}
          </span>
          <p className={styles.repo_desc}>
            Stars: {this.props.stargazers_count}
          </p>
          <p className={styles.repo_desc}>
            Updated At: {this.props.updated_at}
          </p>
        </div>
      </div>
    );
  }
}
