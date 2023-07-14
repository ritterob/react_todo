import * as Yup from 'yup';

const categorySchema = Yup.object().shape({
    catName: Yup.string().max(25, '25 characters max').required('Required'),
    catDesc: Yup.string().max(100, '100 characters max'),
});

const todoSchema = Yup.object().shape({
    name: Yup.string().max(100, '100 characters max').required('Required'),
    categoryId: Yup.number().required('Required'),
});

export { categorySchema, todoSchema };
