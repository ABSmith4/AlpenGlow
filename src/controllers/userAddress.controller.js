import { findAllAddresses, updateAddress, createAddress } from '../services/userAddress.service';

async function fetchUserAddresses(req, res) {
  try {
    const userId = req.user.id;
    const userAddresses = await findAllAddresses(userId);
    res.status(200).json({ userAddresses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function modifyUserAddress(req, res) {
  try {
    const userId = req.user.id;
    // eslint-disable-next-line prefer-destructuring
    const addressId = req.params.addressId;
    const { City, State, PostalCode } = req.body;

    const updatedFields = {
      City,
      State,
      PostalCode,
    };
    const updated = await updateAddress(userId, addressId, updatedFields);
    res.status(200).json({ userAddress: updated, message: 'User address updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createNewAddress(req, res) {
  try {
    const userId = req.user.id;
    const { City, State, PostalCode } = req.body;

    const newAddress = await createAddress(userId, City, State, PostalCode);
    res.status(200).json({ userAddress: newAddress, message: 'User address created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export { fetchUserAddresses, modifyUserAddress, createNewAddress };
