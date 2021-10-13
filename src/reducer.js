export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
   // token: "BQBMI-seLw9Y8x4ts1txq7Re-lzJEopVSGWUlIg1X1iJAxEqOR5YYaUMJlBT_rUT0AB98vN8RViy07SN7eVB8VipLp8cCEo-mW-StYL7sagbP-lSEidgE6Ajf-WimXlpd6BOERiZqVFHDEba_24_e7WYHNxUNlp4esOnAdD-lihRAjZ2dxvs",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;