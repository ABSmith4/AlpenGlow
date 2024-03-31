import db from '../models/index';

const { userAddress } = db;

async function findAllAddresses(userID) {
  try {
    const addresses = await userAddress.findAll({
      where: { userId: userID }
    });
    return addresses;
  } catch (error) {
    throw new Error('An error occurred while fetching your addresses');
  }
}

async function updateAddress(userID, addressId, updatedFields) {
  try {
    const address = await userAddress.findOne({
      where: { id: addressId, userId: userID }
    });
    if (!address) {
      throw new Error('User address not found');
    }
    Object.assign(address, updatedFields);
    await userAddress.save();

    return userAddress;
  } catch (error) {
    throw new Error('An error occurred while updating user address');
  }
}

async function createAddress(userId, City, State, PostalCode) {
  try {
    const existing = await userAddress.findOne({
      where: userId, City, State, PostalCode
    });

    if (existing) {
      throw new Error('Address already exists for this user');
    }
    const newUserAddress = await userAddress.create({
      userId,
      City,
      State,
      PostalCode
    });

    return newUserAddress;
  } catch (error) {
    throw new Error('An error occurred while creating user address');
  }
}

export { findAllAddresses, updateAddress, createAddress };
