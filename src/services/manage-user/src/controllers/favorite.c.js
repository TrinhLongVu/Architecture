import { getAllFavoriteUsers,getNumberOfFavoriteUsers,getUserFavoriteEvent, unfavoriteEvent, addUserFavoriteEvent,fetchTopFavoritedEvents } from "../services/favorite.s.js"

const addUserFavoriteEventController = async (req,res) => {
    try{
        const { ID_NGUOIDUNG, ID_SUKIEN } = {...req.body}
        const newFavorite = await addUserFavoriteEvent(ID_NGUOIDUNG,ID_SUKIEN);
        if(newFavorite){
            res.status(201).json(newFavorite);
        }
    }catch(e){
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const getAllFavoriteUsersController = async (req,res) => {
    try{
        const {ID_SUKIEN} = req.params
        const favoriteUsers = await getAllFavoriteUsers(ID_SUKIEN);
        if(favoriteUsers){
            res.status(201).json(favoriteUsers);
        }
    }catch(e){
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const getNumberOfFavoriteUsersController = async (req,res) => {
    try{
        const {ID_SUKIEN} = req.params
        const favoriteUsersCount = await getNumberOfFavoriteUsers(ID_SUKIEN);
        if(favoriteUsersCount){
            res.status(201).json(favoriteUsersCount);
        }
    }catch(e){
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const getUserFavoriteEventController = async (req,res) => {
    try{
        const {ID_NGUOIDUNG} = req.params;
        const favoriteEvent = await getUserFavoriteEvent(ID_NGUOIDUNG);
        if(favoriteEvent){
            res.status(201).json(favoriteEvent);
        }
    }catch(e){
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const unfavoriteEventController = async (req,res) => {
    try{
        const { ID_NGUOIDUNG, ID_SUKIEN } = {...req.body}
        const unfavoriteOne = await unfavoriteEvent(ID_NGUOIDUNG,ID_SUKIEN);
        if(unfavoriteOne){
            res.status(201).json(unfavoriteOne);
        }
    }catch(e){
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const getTopFavoritedEvents = async (req, res) => {
  try {
    const products = await fetchTopFavoritedEvents();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};


export {addUserFavoriteEventController,getAllFavoriteUsersController,getNumberOfFavoriteUsersController,unfavoriteEventController,getUserFavoriteEventController, getTopFavoritedEvents}


