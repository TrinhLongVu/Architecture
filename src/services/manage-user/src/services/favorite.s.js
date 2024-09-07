import db from '../models/index.mjs';

async function getUserFavoriteEvent(userId) {
    try {
      const favoriteEvent = await db.SUKIENYEUTHICH.findOne({
        where: {
          ID_NGUOIDUNG: userId,
          ISFAVORITE: true
        }
      });
      if(favoriteEvent){
        return favoriteEvent;
      }else{
        return "Not found."
      }
    } catch (error) {
      console.error('Error fetching favorite event:', error);
    }
}

async function addUserFavoriteEvent(userId, eventId) {
  try {
    const [favoriteEvent, created] = await db.SUKIENYEUTHICH.findOrCreate({
      where: {
        ID_NGUOIDUNG: userId,
        ID_SUKIEN: eventId
      },
      defaults: {
        ISFAVORITE: true
      }
    });

    if (!created) {
      favoriteEvent.ID_NGUOIDUNG = userId;
      favoriteEvent.ID_SUKIEN = eventId;
      favoriteEvent.ISFAVORITE = true;
      await favoriteEvent.save();
      return favoriteEvent;
    }else{
      return "Not found.";
    }
  } catch (error) {
    console.error('Error adding favorite event:', error);
  }
}

async function unfavoriteEvent(userId, eventId) {
  try {
    const favoriteEvent = await db.SUKIENYEUTHICH.findOne({
      where: {
        ID_NGUOIDUNG: userId,
        ID_SUKIEN: eventId
      }
    });

    if (favoriteEvent) {
      favoriteEvent.ISFAVORITE = false;
      await favoriteEvent.save();
      return favoriteEvent;
    }else{
      return "Not found.";
    }
  } catch (error) {
    console.error('Error unfavoriting event:', error);
  }
}

async function getNumberOfFavoriteUsers(eventId) {
  try {
    const count = await db.SUKIENYEUTHICH.count({
      where: {
        ID_SUKIEN: eventId,
        ISFAVORITE: true
      }
    });
    if(count){
      return count;  
    }else{
      return "Not found.";
    }
    
  } catch (error) {
    console.error('Error getting number of favorite users:', error);
  }
}

async function getAllFavoriteUsers(eventId) {
  try {
    const favoriteUsers = await db.SUKIENYEUTHICH.findAll({
      where: {
        ID_SUKIEN: eventId,
        ISFAVORITE: true
      }
    });
    if(favoriteUsers){
      return favoriteUsers;
    }else{
      return "Not found.";
    }
  } catch (error) {
    console.error('Error getting all favorite users:', error);
  }
}

export {getAllFavoriteUsers,getNumberOfFavoriteUsers,getUserFavoriteEvent, unfavoriteEvent, addUserFavoriteEvent};