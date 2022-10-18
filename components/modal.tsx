import { Input, Modal as AndModal } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const Modal = ({
  open,
  setOpen,
  setUserName,
}: {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  setUserName: (userName: string) => void;
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  const handleOk = () => {
    setConfirmLoading(true);
    const queryParams = new URLSearchParams({ name, lastName });
    const timeout = setTimeout(() => {
      fetch(`api/generate-username?${queryParams.toString()}`)
        .then((res) => res.json())
        .then((data) => {
          setUserName(data.username);
          setOpen(false);
          router.push(router.pathname, { query: { user: data.username } });
        })
        .finally(() => {
          setConfirmLoading(false);
          setName("");
          setLastName("");
          clearTimeout(timeout);
        });
    }, Math.random() * 6000);
  };

  const handleCancel = () => {
    setOpen(false);
    setConfirmLoading(false);
  };
  return (
    <>
      <AndModal
        wrapClassName="imubit-modal"
        title="Create User Name"
        open={open}
        okButtonProps={{ disabled: confirmLoading }}
        cancelButtonProps={{ disabled: confirmLoading }}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <div>
          <p>Enter your name and last name</p>
          <Input
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </AndModal>
    </>
  );
};
