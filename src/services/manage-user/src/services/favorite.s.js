import { response } from 'express';
import db from '../models/index.mjs';
import axios from 'axios'

async function getUserFavoriteEvent(userId) {
    try {
      const favoriteEvent = await db.SUKIENYEUTHICH.findAll({
        where: {
          ID_NGUOIDUNG: userId,
          ISFAVORITE: true
        }
      });
      let favoriteEventData = {};
      if (favoriteEvent) {
        favoriteEventData = await Promise.all(favoriteEvent.map(async (event) => {
          let eventData = {};
          try {
            const response = await axios.get(`http://api-gateway:2999/brand/api/v1/event/${event.ID_SUKIEN}`, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const data = response.data; // Use response.data instead of response.body
            const TGBATDAU = new Date(data.TGBATDAU);
            const notificationTime = new Date(TGBATDAU);
            notificationTime.setMinutes(TGBATDAU.getMinutes() - 10);
          
            eventData = {
              ...event.dataValues,
              eventData: data,
              notificationTime: notificationTime.toISOString() // Convert to ISO string if needed
            };
          } catch (error) {
            console.error('Error fetching event data:', error);
          }
          return eventData;
        }));
        console.log(favoriteEventData);
        return favoriteEventData;
      } else {
        return "Not found.";
      }
    } catch (error) {
      console.error('Error fetching favorite event:', error);
      return error;
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
      return favoriteEvent;
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