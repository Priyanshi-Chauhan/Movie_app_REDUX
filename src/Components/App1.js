import { setshowfavorites } from "../actions";

class App extends React.Component {
    componentDidMount() {
        const { store } = this.props;
    
        store.subscribe(() => {
            this.forceUpdate();
        })

        store.dispatch(addmovies(data));
        console.log(store.getState());
    }

    isMovieFavourite = (movie) => {
        const { movies } = this.props.store.getState();

        const index = movies.favorites.indexOf(movie);
        if (index !== -1) {
            return true;        //  means we found the movie
        }
        return false;
    }
    onChangeTab = (val) => {
        this.props.store.dispatch(setshowfavorites(val));
    }
    render() {
        const { movies, search } = this.props.store.getState();
        const { list, favorites, show } = movies;
        console.log('render', this.props.store.getState());

     }


}