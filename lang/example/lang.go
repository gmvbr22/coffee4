package control

type Profile struct {
  Name string
  Email string
  Password string
  Phone string
}

func (self_profile *Profile) UpdateProfile() {
}

type Authentication struct {
  message_error string
  message_success string
}

func (self_authentication *Authentication) Login() {
}

