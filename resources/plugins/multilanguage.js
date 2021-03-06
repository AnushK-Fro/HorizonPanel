import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
	'en' : {
		horizonpanel: "HorizonPanel",
		home: "Home",
		clients: "Clients",
		orders: "Orders",
		billing: "Billing",
		support: "Support",
		personal_preferences: "Personal Preferences",
		app_config: "HorizonPanel Configuration",
		pending_orders: "Pending Orders",
		tickets_waiting: "Tickets Waiting",
		pending_cancellations: "Pending Cancellations",
		server_health: "Server Health",
		good: "Good",
		actions_required: "Actions Required",
		critical: "Critical",
		add_new_order: "Add New Order",
		list_all_orders: "List All Orders",
		list_transactions: "List Transactions",
		sign_in: "Sign in",
		to_continue: "to continue to HorizonPanel Admin",
		next: "Next",
		invalid_email: "Invalid Email",
		unknown_error: "Unknown Error",
		submit: "Submit",
		enter_password: "Enter the password for",
		invalid_password: "Invalid Password",
		sign_out: "Sign Out",
	}
}

const i18n = new VueI18n({locale: 'en', fallbackLocale: 'es', messages});

export default i18n;