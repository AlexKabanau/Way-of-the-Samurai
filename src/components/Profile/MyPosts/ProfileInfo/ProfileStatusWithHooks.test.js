import React, { useEffect, useState } from "react";
import { create } from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("ProfileStatus component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutera.com"/>);
    const instance = component.getInstance();
    expect(instance.status).toBe("it-kamasutera.com");
  })
})