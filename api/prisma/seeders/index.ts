import ProductSeeder from "./products";
import StatusPurchaseSeeder from "./statusPurchase";
import TypeUserSeeder from "./typeUser";
import UsersSeeder from "./users";

const execSeeders = async () => {
    await StatusPurchaseSeeder();
    await TypeUserSeeder();
    await ProductSeeder();
    await UsersSeeder();
}

execSeeders();