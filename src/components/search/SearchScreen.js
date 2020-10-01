import React, {useMemo} from "react";
import {heroes} from "../../data/Heroes";
import {HeroCard} from "../heroes/HeroCard";
import {useForm} from "../../hooks/useForm";
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import {getHeroesByName} from "../../selectors/getHeroesByName";

export const SearchScreen = ({history}) => {

    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [formValue, handleInputChange] = useForm({
        query: q
    });
    const {query} = formValue;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${query}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find Hero"
                            className="form-control"
                            name="query"
                            value={query}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {q === '' &&
                    <div className="alert alert-info text-center">
                        Search a hero
                    </div>
                    }

                    {(q !== '' && heroesFiltered.length === 0) &&
                    <div className="alert alert-danger text-center">
                        There's no hero with text {q}
                    </div>
                    }

                    {heroesFiltered.map(hero => {
                        return (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        )
                    })

                    }
                </div>
            </div>
        </div>
    )
}