import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";
import { usernameIsValid } from "../../../helpers";

export default async function handle(req, res) {
  const { firstName, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  if (!usernameIsValid(username)) {
    res
      .status(400)
      .json({ error: true, errorMessage: "Username is not valid." });
  } else {
    const result = await prisma.user.create({
      data: {
        firstName: firstName,
        username: username,
        email: email,
        password: hashedPassword,
        profile: {
          create: {},
        },
      },
    });
    res.json(result);
  }
}
