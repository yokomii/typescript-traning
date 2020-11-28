export {};

class Profile {
  constructor (public name: string) {}
}

type ProfileConstructorType = ConstructorParameters<typeof Profile>
