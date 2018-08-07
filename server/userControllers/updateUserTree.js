/**
 * Created by Adam on 7/5/2018.
 */

let findUsersWithApproverId = (users, id) => {
	return users.filter((user) => {
		if (user.approverid === id) {
			return true;
		}
	});
};

let shiftAmount = 3;
exports.displayUserTree = (root, users) => {
	let display = (root, shift) => {
        console.log(" ".repeat(shift), root.id);
		let children = findUsersWithApproverId(users, root.id);
		children.map((child) => {
			display(child, shift+shiftAmount);
		});
	};

	display(root, 0);
};

exports.buildUserTree = function(users) {
	let tree = [];

	let build = (id, left) => {
		let right = left + 1;
		let children = findUsersWithApproverId(users, id);
		children.map( ({id}) => {
			right = build(id, right);
		});
		tree.push({
			id: id,
			left: left,
			right: right
		});
		return right+1;
	};

	let roots = findUsersWithApproverId(users, null);

	let rightCounter = 0;
	roots.map( ({ id }) => {
		rightCounter = build(id, rightCounter);
	});

	tree.sort((a, b) => a.left > b.left);

	return tree;
};

let updateUserTree = function() {
};



let users = [{
	id: 2,
	approverid: null
},{
	id: 3,
	approverid: 2
},{
	id: 4,
	approverid: 2
},{
	id: 5,
	approverid: 3
},{
	id: 6,
	approverid: 4
},{
	id: 7,
	approverid: 5
},{
	id: 8,
	approverid: 5
},{
	id: 9,
	approverid: 4
},{
	id: 10,
	approverid: 6
}];

let tree = exports.buildUserTree(users);
exports.displayUserTree(tree[0], users);

