interface UserCreatingAccountDTO {
    body: {
        email:      string;
        username:   string;
        password:   string,
        firstName:  string;
    }
}

export default UserCreatingAccountDTO;