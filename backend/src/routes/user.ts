import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinInput, signupInput } from "@arinjay_bhola/zod-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const success = signupInput.safeParse(body);
  if (!success.success) {
    c.status(411);
    return c.json({ message: "Credantials not valid" });
  }
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token });
  } catch (error) {
    return c.status(403);
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const success = signinInput.safeParse(body);
  if (!success.success) {
    c.status(411);
    return c.json({ message: "Credantials not valid" });
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    console.log(user);
    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }
    if (user?.password !== body.password) {
      c.status(403);
      return c.json({ error: "Password Wrong" });
    }
    const token = await sign({ id: user?.id }, c.env.JWT_SECRET);
    return c.json({ token });
  } catch (error) {
    return c.status(403);
  }
});
