import OracleDb from 'oracledb';
OracleDb.outFormat = OracleDb.OUT_FORMAT_OBJECT;
var ORACLE_URL =
	'(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(Host = localhost' +
	')(Port = 1521' +
	'))(CONNECT_DATA = (SID = xe' +
	')))';
var ORACLE_USER = 'super';
var ORACLE_PASS = 'abcd1234';

export let con;
export async function connection() {
	try {
		con = await OracleDb.getConnection({
			user: ORACLE_USER,
			password: ORACLE_PASS,
			connectString: ORACLE_URL
		});
		// const data = await con.execute(
		//     'SELECT * FROM table1',
		// );
		// console.log(data.rows);
	} catch (err) {
		console.error(err);
	}
}

// module.exports = { fun }