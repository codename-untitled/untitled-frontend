import FormField from 'modules/general/components/formComponents/formField';
import Button from 'modules/general/components/buttons/button';

const Profile = () => (
  <div className="border border-solid border-black shadow-[1px_1px_0_0_#000] bg-white px-[12%] py-10 mx-10 my-8">
    <div className="mb-6 border border-solid border-black shadow-[1px_1px_0_0_#000] px-[12%] py-8">
      <p className="mb-12 text-xl font-semibold text-black text-center">
        Company Information
      </p>
      <img
        className="mx-auto mb-5"
        src={require('assets/profile-image.png')}
        alt="profile"
      />
      <p className="text-base font-semibold text-center">Johan Davison</p>
      <div className="mt-14 mb-10 grid md:grid-cols-2 gap-x-5 gap-y-8">
        <FormField
          label="Company name*"
          name="name"
          placeholder="Interpol corp"
          disabled
          className=" disabled:bg-gray-200 disabled:cursor-not-allowed"
        />
        <FormField
          label="Company email*"
          name="email"
          placeholder="interpolcorp@email.com"
          disabled
          className="disabled:bg-gray-200 disabled:cursor-not-allowed"
        />
        <div className="md:col-start-1 md:col-end-3">
          <FormField
            label="Company address*"
            name="address"
            placeholder="1, Interpol street, Interpol city"
            disabled
            className="disabled:bg-gray-200 disabled:cursor-not-allowed"
          />
        </div>
        <FormField
          label="Industry*"
          name="industry"
          placeholder="Technology"
          disabled
          className="disabled:bg-gray-200 disabled:cursor-not-allowed"
        />
        <FormField
          label="Tax ID*"
          name="tax-id"
          placeholder="449404"
          disabled
          className="disabled:bg-gray-200 disabled:cursor-not-allowed"
        />
      </div>
    </div>
    <div className="border border-solid border-black shadow-[1px_1px_0_0_#000] px-[12%] py-8">
      <p className="mb-14 text-xl font-semibold text-black text-center">
        Change Password
      </p>
      <div className="flex flex-col gap-y-8">
        <FormField label="Current Password" name="current-password" />
        <FormField label="New Password" name="new-password" />
        <FormField label="Confirm Password" name="confirm-password" />
      </div>
      <Button
        label="Change Password"
        className="mt-10 px-8 py-[14px] w-max h-max"
      />
    </div>
  </div>
);

export default Profile;
