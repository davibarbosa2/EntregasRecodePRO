import React, { Component } from "react";

import { connect } from "react-redux";

import {
	searchMovie,
	fetchMovies,
	setLoading,
} from "../../actions/searchActions";

export class SearchForm extends Component {
	onChange = (e) => {
		this.props.searchMovie(e.target.value);
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.fetchMovies(this.props.text);
		this.props.setLoading();
	};

	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid mt-5 text-center">
					<div className="container">
						<h1 className="display-5 mb-3">
							<i className="fa fa-search" /> Procure por um filme ou série
							(apenas em inglês)
						</h1>
						<form id="searchForm" onSubmit={this.onSubmit}>
							<input
								type="text"
								className="form-control"
								name="searchText"
								placeholder="Digite um filme , série , etc..."
								onChange={this.onChange}
							/>
							<button type="submit" className="btn btn-primary btn-bg mt-3">
								Procurar
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	text: state.movies.text,
});

export default connect(mapStateToProps, {
	searchMovie,
	fetchMovies,
	setLoading,
})(SearchForm);
